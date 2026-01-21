import Note from "../models/Note.modules.js";

export const createNote = async (req,res)=>{
    try{
        const note = await Note.create({
            title: req.body.title,
            content: req.body.content,
            user: req.user.id
        });
        res.status(201).json(note);
    }catch(err){
        res.status(500).json({ message: err.message});
    }
}


export const getNotes = async (req, res) =>{
    try{
        const notes = await Note.find({ user: req.user.id});
        res.json(notes);
    } catch(err){
        res.status(500).json({ message: err.message});
    }
};



export const deleteNote = async (req, res)=>{
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Note deleted"});
    } catch(err){
        res.status(500).json({ message: err.message});
    }
};