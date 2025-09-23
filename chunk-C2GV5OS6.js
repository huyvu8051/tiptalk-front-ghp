
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="741ba2ab-84ed-5d5b-9367-312643b8f830")}catch(e){}}();
import{b as n,d as c}from"./chunk-Z227VDA2.js";import{F as a,I as s,Ua as o,i}from"./chunk-XZX3LLVG.js";var f=(()=>{class e{httpClient;streamerSubject=new i(n());streamer$=this.streamerSubject.asObservable();constructor(t){this.httpClient=t}getStreamer({id:t}){return this.httpClient.get(`/api/v1/streamer/${t}`).pipe(c(this.streamerSubject))}getStreamerList(t){let r={pageSize:t.pageSize.toString()};return t.searchQuery&&(r.searchQuery=t.searchQuery),t.lastId&&(r.lastId=t.lastId),this.httpClient.get("/api/v1/streamer",{params:r})}static \u0275fac=function(r){return new(r||e)(s(o))};static \u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();export{f as a};
//# sourceMappingURL=chunk-C2GV5OS6.js.map

//# debugId=741ba2ab-84ed-5d5b-9367-312643b8f830
