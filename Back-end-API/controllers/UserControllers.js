
exports.getUsers = (req , res )=>{
  res.json({
    posts:[
      {tittle : ' First Post'},
      {tittle : 'Second Post'}
    ] 
  });
};
