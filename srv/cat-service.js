const cds = require('@sap/cds')

module.exports = async function (){
this.on ( 'CREATE','Holes', (req,next)=>{
     const reqData = req.data
    //  console.log('in create');
    //  console.log(reqData.score);
    //  console.log(reqData.par);
     if(reqData.score == 1 && !reqData.par ){
        reqData.result = 'hole in one'
        return next();
     }
     if (reqData.score  - reqData.par == -3)
        reqData.result = 'albatross'
     if (reqData.score  - reqData.par == -1)
         reqData.result = 'birdie'    
         if (reqData.score  - reqData.par == -2)
         reqData.result = 'eagle'  
         if (reqData.score  - reqData.par == 0)
         reqData.result = 'par'  
         if (reqData.score  - reqData.par == 1)
         reqData.result = 'hole in one'   
         if (reqData.score  - reqData.par == +1)
         reqData.result = 'bogey'   
         if (reqData.score  - reqData.par == +2)
         reqData.result = 'birdie'   
     return next();
})
const remote = await cds.connect.to('RemoteService')
this.on('*', 'Players', (req) => {
    console.log('>> delegating to remote service...')
    return remote.run(req.query)
})



}