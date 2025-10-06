
export default function ErrorMessage({message}: {message: string}) {
  return (
    <p className="bg-red-700 mt-2 text-center p-2 rounded-lg text-white text-sm uppercase font-bold">{message}</p>
  )
}
