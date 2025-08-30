
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b00573f3-c9ce-5fb8-909a-f916030e13f5")}catch(e){}}();
import{E as a,i as r}from"./chunk-MBEOCHH3.js";var o=(()=>{class t{THEME_KEY="preferred-theme";themeSubject=new r(this.getInitialTheme());theme$=this.themeSubject.asObservable();constructor(){this.applyTheme(this.themeSubject.value)}toggleTheme(){let e=this.themeSubject.value==="light"?"dark":"light";this.setTheme(e)}setTheme(e){this.themeSubject.next(e),this.applyTheme(e),localStorage.setItem(this.THEME_KEY,e)}getInitialTheme(){let e=localStorage.getItem(this.THEME_KEY);return e||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}applyTheme(e){document.documentElement.setAttribute("data-theme",e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();export{o as a};
//# sourceMappingURL=chunk-KT6NUB6X.js.map

//# debugId=b00573f3-c9ce-5fb8-909a-f916030e13f5
