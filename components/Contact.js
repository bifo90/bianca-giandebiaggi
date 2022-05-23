import {useState} from 'react'
const Contact = () => {
    const endpoint = "https://usebasin.com/f/58e6a1181d50.json"
    const [data,setData] = useState({email: "", name: "", message: ""})
    const submit = (e) => {
        e.preventDefault()
        const inputs = Array.from(document.querySelectorAll('.js-input'))
		fetch(endpoint, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
		}).then(res=>res.json())
		inputs.forEach((i) => {
            i.value = ""
		})  
        alert(`Grazie ${data.name}! Il tuo messaggio è stato ricevuto correttamente dal nostro staff. A breve sarai ricontattato via mail.`)     
    }

    return (
        <div className="pb-16 mx-auto w-full md:w-3/4" id="contact">
            <h2 className="px-4 md:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl t-violet mb-8">Contatti</h2>
            <form action="post" url="" onSubmit={submit} className="flex flex-wrap justify-between px-4" >
                <div className="w-full mb-8 md:w-1/2 md:p-1">
                    <label htmlFor="name">Nome e Cognome</label>
                    <input onChange={e => setData({...data, name: e.target.value })} className="p-4 text-blue-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 sm:text-sm border border-gray-300 rounded-md block w-full" type="text" id="name" name="name" placeholder="Nome e Cognome" required />
                </div>
                <div className="w-full mb-8 md:w-1/2 md:p-1">
                    <label htmlFor="email">Email</label>
                    <input onChange={e => setData({...data, email: e.target.value })} className="p-4 js-input text-blue-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 sm:text-sm border border-gray-300 rounded-md block w-full" type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="w-full p-1">
                    <label htmlFor="message">Messaggio</label>
                    <textarea onChange={e => setData({...data, message: e.target.value })} className="p-4 js-input text-blue-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md w-full block" type="text" id="message" name="message" placeholder="Messaggio" required></textarea>
                </div>
                <div className="w-full px-1 py-8">
                    <input type="submit" value="Invia" className="w-full md:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer" />
                </div>
            </form>
        </div>
    )
}
export default Contact