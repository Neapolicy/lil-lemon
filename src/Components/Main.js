export default function Main(){
    function handleSubmit(formData){
        const data = Object.fromEntries(formData);
        const { date, time } = data;
        console.log(date, time);
        alert("Form Submitted!")
    }

    return  <main>
      <form action={handleSubmit} className="form">
        <label>
            <input type="date" name="date" required />
            What day will you be coming?
        </label>

        <div>
          <label>
            <input type="radio" name="time" value="morning" required />
            Breakfast
          </label>

          <label>
            <input type="radio" name="time" value="afternoon" required />
            Lunch
          </label>

          <label>
            <input type="radio" name="time" value="evening" required />
            Dinner
          </label>
        </div>
        <p>What type of meal would you like?</p>


        <label>
            <input type = "time" name = "timetime" required/>
            At what time will you arrive?
        </label>

        <label>
            <input type = "number" name = "seats"  min = "1" max = "10" required />
            How many seats?
        </label>

        <button type="submit">Submit</button>
      </form>
    </main>
}