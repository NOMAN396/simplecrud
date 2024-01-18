import { updateNote } from "@/app/lib/actions";
import { prisma } from "@/app/lib/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const text = await prisma.note.findUnique({
    where: {
      id,
    },
  });

  const updateNoteWithId = updateNote.bind(null, params.id);
  return (

    <div className="font-mono">
      <h1> Crude update action</h1>
      <p>simple next js server action</p>

      <form action={updateNoteWithId}>

        <label htmlFor="text" className='block'>Note</label>
        <textarea name="text" id="text" cols={30} rows={10} className="border border-black" defaultValue={text.text}> </textarea>
        <button type='submit'>Submit</button>
      </form>


    </div>

  )
}

