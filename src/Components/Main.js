export default function Main(){
    function handleSubmit(formData){
        const data = formData.get("date");
        console.log(data);
    }

    return <main>
        <form action={handleSubmit} className="form">
            <input type = 'date' name = 'date'></input>
            <input type = 'radio' name = 'time'></input>
            <button type = 'submit'>submit</button>
        </form>
    </main>
}