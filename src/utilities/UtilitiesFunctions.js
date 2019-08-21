export const convertToMinutes=(ms)=>{
  let minutes = Math.floor(ms / 60000);
  let seconds = ((ms % 60000) / 1000).toFixed(0);
  let result=`${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;

return result;
}