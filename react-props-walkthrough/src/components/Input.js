function Input() {
    return(
        <form>
        <label>Name:</label>
        <input onChange={(e) => {setName(e.target.value)}}></input>
        <label>Age:</label>
        <input onChange={(e) => {setAge(e.target.value)}}></input>
        <label>Hobbies:</label>
        <input onChange={(e) => {setHobbies(e.target.value)}}></input>
      </form>
    )
}