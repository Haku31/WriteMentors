import User from "../models/user.model.js"

export const deleteUser = async (req,res, next) =>{
    const user = await User.findById(req.params.id)


        if(req.userId !== user._id.toString()){
          return  next(createError(403, "Solo puedes borrar la informacion de tu usuario"));
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Eliminado")
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};

