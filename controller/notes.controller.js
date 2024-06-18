import { query } from "../database/db.js"

export const getNotes = async(req,res)=>{
    try{
        const result = await query('Select * from notes')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertNotes = async(req,res)=>{
    const {tittle, datetime, note}= req.body
    try {
        await query("INSERT INTO notes(tittle, datetime, note) values (?, ?, ?)", [tittle, datetime, note])
        return res.status(200).json({msg:"notes Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateNotes = async(req,res)=>{
    const {tittle, datetime, note}= req.body
    const {id}=req.params
    try {
        await query("UPDATE notes SET tittle=?, datetime=?, note=? where id=?", [tittle, datetime, note, id])
        return res.status(200).json({msg:"notes Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteNotes = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM notes where id=?", [id])
        return res.status(200).json({msg:"notes Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getNotesById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from notes where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getnotesTest = async(req,res)=>{
    const {id, nama} = req.query
    console.log(id, nama)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from notes where id=?', [id,nama])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
