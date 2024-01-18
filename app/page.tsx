
import { deleteNote } from "./lib/actions";
import createNote  from "./lib/actions";
import { prisma } from "./lib/prisma";
import { updateNote } from '@/app/lib/actions';



export default async function Home() {

  const data = await prisma.note.findMany();
  return (
    <main className="p-10">
      <div className="font-mono">
        <h1> Crude for study</h1>
        <p>With Action</p>

        <form action={createNote}>

          <label htmlFor="text" className='block'>Please Write Your Name</label>
          <input type="text" name="text" id="text"className="border border-black"/> 
          <button type='submit'>Submit</button>
        </form>
        <div className='mt-6'>
          <h1>Student Details</h1>
          {data.map((item) => {
            const deleteNoteWithId = deleteNote.bind(null, item?.id);

            console.log(deleteNote);
            return(

            <a key={item?.id} href={`notes/${item?.id}`} className="underLink" >

          
                <p> {item?.text} </p>
                  <form action={deleteNoteWithId}>
                    
                    <button className="red" typeof="submit">
Delete
                    </button>
                   
            
                </form>
             
    
  </a>
)})}
          
        </div>
      </div>
    </main>
  )
}
