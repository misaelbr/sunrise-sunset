var SunriseSunsetJS=function(t){"use strict";var e=90.8333,n=15,a=36e5;function r(t){return Math.sin(2*t*Math.PI/360)}function u(t){return 360*Math.acos(t)/(2*Math.PI)}function i(t){return Math.cos(2*t*Math.PI/360)}function h(t,e){var n=t%e;return n<0?n+e:n}function o(t,e,o,M,c){var f,g,s=function(t){return Math.ceil((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5)}(c),l=e/n,v=o?s+(6-l)/24:s+(18-l)/24,D=.9856*v-3.289,I=h(D+1.916*r(D)+.02*r(2*D)+282.634,360),P=.91764*(f=I,Math.tan(2*f*Math.PI/360));g=h(g=360/(2*Math.PI)*Math.atan(P),360),g+=90*Math.floor(I/90)-90*Math.floor(g/90),g/=n;var T,w=.39782*r(I),S=i((T=w,360*Math.asin(T)/(2*Math.PI))),m=(i(M)-w*r(t))/(S*i(t)),C=h((o?360-u(m):u(m))/n+g-.06571*v-6.622-e/n,24),U=new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),0);return new Date(U.getTime()+C*a)}return t.getSunrise=function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;return o(t,n,!0,e,a)},t.getSunset=function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;return o(t,n,!1,e,a)},t}({});