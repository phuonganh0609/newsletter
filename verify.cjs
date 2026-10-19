const fs = require('fs');
const luminance = hex => {
  const c = hex.replace('#','').match(/../g).map(x => parseInt(x,16)/255).map(x => x <= .04045 ? x/12.92 : ((x+.055)/1.055)**2.4);
  return c[0]*.2126+c[1]*.7152+c[2]*.0722;
};
const ratio = (a,b) => { const x=luminance(a), y=luminance(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };
let report='KIỂM TRA ĐỘ TƯƠNG PHẢN\nNgưỡng cho chữ thường: 4.5:1.\n\n';
for (const name of ['style1.css','style2.css']) {
  const vars=Object.fromEntries([...fs.readFileSync(name,'utf8').matchAll(/--([\w-]+):\s*(#[\da-f]+)/gi)].map(m=>[m[1],m[2]]));
  report+=name+'\n';
  for(const [a,b] of [['primary-color','on-primary'],['secondary-color','on-secondary'],['accent-color','on-accent'],['light-bg-color','text-color'],['light-bg-color','primary-color'],['darker-primary-color','on-primary'],['accent-color','text-color'],['primary-color','accent-color']]) {
    const n=ratio(vars[a],vars[b]);
    report+=`${vars[a]} / ${vars[b]}: ${n.toFixed(2)}:1 — ${n>=4.5?'ĐẠT':'KHÔNG ĐẠT'}\n`;
    if(n<4.5) throw Error('Insufficient contrast: '+a+'/'+b);
  }
  report+='\n';
}
for (const file of ['index.html','newsletter_version1.html','newsletter_version2.html']) {
  const html=fs.readFileSync(file,'utf8');
  if(html.includes('{{') || html.includes('�')) throw Error('Invalid generated content: '+file);
  for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if(!/^(https?:|#)/.test(m[1]) && !fs.existsSync(m[1])) throw Error('Missing local target: '+m[1]);
  }
}
fs.writeFileSync('contrast-report.txt',report,'utf8');
console.log(report);
console.log('PASS: Local links, generated content and color contrast.');
