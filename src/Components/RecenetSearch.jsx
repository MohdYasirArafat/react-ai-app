import React from 'react'

const RecenetSearch = ({recentHistory, setRecentHistory, setSelectedHistory}) => {

    
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  }

  return (
    <>
          <div className="col-span-1 dark:bg-zinc-700 bg-red-100 pt-3">
        <h1 className="text-lg dark:text-white text-zinc-800 flex justify-center items-center">
          <span>Recent Search</span>
          <button onClick={clearHistory} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M624-288v-72h144v72H624Zm0-264v-72h240v72H624Zm0 132v-72h192v72H624ZM144-624H96v-72h168v-72h144v72h168v72h-48v360q0 29.7-21.15 50.85Q485.7-192 456-192H216q-29.7 0-50.85-21.15Q144-234.3 144-264v-360Zm72 0v360h240v-360H216Zm0 0v360-360Z"/></svg></button>
        </h1>
        <ul className="text-left overflow-auto mt-2">
          {
            recentHistory && recentHistory.map((item, index) => (
              <li key={index} onClick={() => setSelectedHistory(item)} className=" pl-5 px-5 dark:text-zinc-400 text-zinc-700 cursor-pointer dark:hover:bg-zinc-700 bg dark:hover:text-zinc-200 hover:bg-red-200 hover:text-zinc-800">{item}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default RecenetSearch
