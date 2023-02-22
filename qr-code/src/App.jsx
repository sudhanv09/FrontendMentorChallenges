export default function App() {

  return (
    <main className="flex justify-center items-center h-screen bg-light-gray ">
    <div className="flex-row bg-white space-y-6 shadow-lg rounded-xl p-5 text-black text-center w-80">
      <img 
        src="../public/image-qr-code.png"
        className="rounded-xl max-w-full h-auto"/> 

      <p className="font-bold text-2xl text-dark-blue">
        Improve your front-end skills by building projects
      </p>

      <p className="pb-4 text-grayish-blue">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
    </main>
  )
}

