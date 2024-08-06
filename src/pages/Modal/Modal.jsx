import React from 'react'

const Modal = () => {
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-gray-400" onClick={()=>document.getElementById('my_modal_3').showModal()}>More details</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h2 className='font-bold text-3xl'>User complaint:</h2>
    <img   src="public/png-transparent-eco-logo-logo-bag-promotional-merchandise-business-eco-leaf-text-service-thumbnail-removebg-preview.png"  className='relative left-12    ' alt="" />
    <p className='font-bold'>Экосистемы: Изучение различных экосистем, таких как леса, океаны, пустыни и их компонентов — как живых (растений, животных, микроорганизмов), так и неживых (почва, вода, климат).</p>
    <div className=' border-2 bg-black'></div>
    <p className='font-bold'>Биоразнообразие: Изучение разнообразия жизни на Земле, включая количество видов, их распределение и сохранение.</p>
  </div>
</dialog>
    </div>
  )
}

export default Modal