var fs=require("fs"),direction,directionReversed,gridSize,gridSource,i,ii,result,notJustOnes;fs.readFileSync(process.argv[2]).toString().split("\n").forEach(function(r){if(""!=r){for(r=r.split("; "),direction=r[0],gridSize=r[1],gridSource=r[2].split("|"),i=0;gridSize>i;i++)gridSource[i]=gridSource[i].split(" ");switch(directionReversed=!1,grid=[],direction){case"UP":directionReversed=!0;case"DOWN":for(i=0;gridSize>i;i++)for(grid[i]=[],ii=0;gridSize>ii;ii++)grid[i].push(gridSource[directionReversed?gridSize-ii-1:ii][i]);break;case"LEFT":directionReversed=!0;case"RIGHT":for(i=0;gridSize>i;i++)for(grid[i]=[],ii=0;gridSize>ii;ii++)grid[i].push(gridSource[i][directionReversed?gridSize-ii-1:ii]);break;default:return}for(ii=0;gridSize>ii;ii++){for(notJustOnes=0!=grid[ii][0],i=1;gridSize>i;i++)notJustOnes&&0==grid[ii][i]?(grid[ii].splice(i,1),grid[ii].splice(0,0,0)):0!==grid[ii][i]&&(notJustOnes=!0);for(i=gridSize-1;i>0;i--)grid[ii][i]==grid[ii][i-1]&&(grid[ii][i]*=2,grid[ii].splice(i-1,1),grid[ii].splice(0,0,0))}switch(result="",direction){case"UP":case"DOWN":for(i=0;gridSize>i;i++){for(ii=0;gridSize>ii;ii++)result+=(ii?" ":"")+grid[ii][directionReversed?gridSize-i-1:i];i!=gridSize-1&&(result+="|")}break;case"LEFT":case"RIGHT":for(i=0;gridSize>i;i++){for(ii=0;gridSize>ii;ii++)result+=(ii?" ":"")+grid[i][directionReversed?gridSize-ii-1:ii];i!=gridSize-1&&(result+="|")}}console.log(result)}});