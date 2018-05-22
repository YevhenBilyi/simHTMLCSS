const userData=require('./userData.json')

module.exports={
    getAll:(req, res)=>{
        var users=userData.slice();
         res.status(200).send(users)
        },
    updateUser:(req, res)=>{
        userData.forEach((user,i,arr)=>user.id==req.params.userId? arr[i]=req.body: '')
        res.status(200).send(userData)
    },
    createUser:(req, res)=>{
       var newUser=req.body;
       newUser.id=userData[userData.length-1].id+1
       userData.push(newUser);
       res.status(200).send(userData);
    },
    deleteUser:(req, res)=>{
        var id=userData.findIndex(user=>user.id==req.params.id);
        userData.splice(id, 1);
        res.status(200).send(userData);
    }

       
       
}

