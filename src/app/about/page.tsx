
 export default function Home() {
   return (
     <main className="flex min-h-screen flex-col items-center justify-between  ">
       <img src="./images/logo.png" alt="Estrela" className="log1"/>
        <div>  
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-stone-100 border-t-indigo-500"> 
              <a href="http://localhost:3000/">
                <svg className="x" href="#" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
              </a >
              <p className="cartao font-bold px-6 pt-4 pb-2 ">
                <span className="text-blue-500">Webinar: </span> Como aumentar sua geração  de Leads feat. Traktor 
              </p>
              <video src="./video/video.mp4"
                controls>
              </video>

            <div className="px-6 py-4">
              <div className="font-bold cartoes-video mb-2">Descrição</div>
              <hr></hr>
                <p className="text-gray-700 cartoes-res">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem 
                  praesentium nihil.
                </p>    
              <div className="font-bold cartoes-video mb-2 ">Downloads</div>
              <hr></hr>
              <div>
                <img src="./images/EXCEL.png"  className="fotinha"/>
                <img src="./images/word.png"  className="fotinha1"/>
                <img src="./images/ppt.png"  className="fotinha2"/>
              </div>
            </div>
          </div>
        </div>
    <hr className="h-px my-5 w-9/12 bg-slate-200	border-0 dark:bg-slate-200"></hr>
     <div className="mx-auto w-full max-w-screen-xl">
       <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
         <div>
             <h2 className="mb-6 text-base font-semibold text-gray-900  dark:text-white">Links Principais</h2>
             <ul className="text-gray-500 dark:text-gray-400 font-medium">
                 <li className="mb-4">
                     <a href="#" className=" hover:underline">Home</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Ferramenta</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Preço</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Contato</a>
                 </li>
             </ul>
         </div>
         <div>
             <h2 className="mb-6 text-base font-semibold text-gray-900  dark:text-white">Cases</h2>
             <ul className="text-gray-500 dark:text-gray-400 font-medium">
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Geração de Leads B2B</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Geração de Leads em Software</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Geração de Leads em Imobiliária</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Case de Sucesso </a>
                 </li>
             </ul>
         </div>
         <div>
             <h2 className="mb-6 text-base font-semibold text-gray-900  dark:text-white">Materiais</h2>
             <ul className="text-gray-500 dark:text-gray-400 font-medium">
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Blog</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Parceria com Agências</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Guia Definitivo do Marketing</a>
                 </li>
                 <li className="mb-4">
                     <a href="#" className="hover:underline">Material Gratuitos</a>
                 </li>
             </ul>
         </div>
         <div>
           <h2 className="mb-6 text-base font-semibold text-gray-900  dark:text-white">Siga a Leadster</h2>
             <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                 <li className="mb-4">
                   <div className="flex mt-4 space-x-5 max">
                     <a href="https:www.linkedin.com/in/bianca-muniz-7a664b209/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-4">
                       <div className="w-8 h-8 rounded-full flex rounded-full flex items-center justify-center bg-blue-100">
                         <svg xmlns="http:www.w3.org/2000/svg" fill="currentColor"  height="1em" viewBox="0 0 448 512">
                           <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                         </svg>
                       </div>
                     </a>
                     <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                       <div className="w-8 h-8 rounded-full flex rounded-full flex items-center justify-center bg-blue-100">
                         <svg className="w-4 h-4 " aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                           <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                         </svg>
                       </div>
                     </a>
                     <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-4">
                       <div className="w-8 h-8 rounded-full flex rounded-full flex items-center justify-center bg-blue-100">
                         <svg  className="w-4 h-4 " xmlns="http:www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512">
                           <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                         </svg>
                       </div>
                     </a>
                   </div>
                 </li>
                 <li className="mb-4">
                   <a href="#" className="hover:underline">  <span className="text-black">E-mail: </span> contato@gmail.com</a>
                 </li>
                 <li className="mb-4">
                   <a href="#" className="hover:underline">  <span className="text-black">Telefone </span> (42) 998828-9851</a>
                 </li>
             </ul>
         </div>
       </div>
       <hr className="h-px my-5 w-full bg-slate-200	border-0 dark:bg-slate-200"></hr>

       <div className="px-4 py-6  md:justify-between">
         <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center"> Copyright © 2015 - 2023 Todos os direitos reservados  |   <span className="text-blue-600">Leadster </span> </span>
         <span className="rua text-sm  text-gray-500 dark:text-gray-300 sm:text-center"> Rua José Loureiro , 464 - Centro - Curitiba PR - CEP:80010-000 | Termos de uso</span>
       </div>
     </div> 
 </main>
   )
 }