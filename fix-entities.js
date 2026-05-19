const fs=require('fs'),path=require('path');
function w(d){
const e=fs.readdirSync(d,{withFileTypes:1});
for(const n of e){
const p=path.join(d,n.name);
if(n.isDirectory())w(p);
else if(n.name=='index.html'){
let c=fs.readFileSync(p,'utf8');
c=c.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#34;/g,'"');
fs.writeFileSync(p,c,'utf8')}}}
w('.');