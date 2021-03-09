const NameEmailPas=() =>{



    return (
        <div>
            <h1>Регистрация</h1>
            <div>
                <input type="text" placeholder='name'/>
            </div>
            <div>
                <input type="text" placeholder='surname'/>
            </div>
            <div>
                <select>
                    <p>год рождения</p>
                    <option value="grapefruit">1992</option>
                    <option value="lime">1993</option>
                    <option selected value="coconut">1994</option>
                    <option value="mango">1995</option>
                </select>
                <div>
                    <input type="email" placeholder='Email'/>
                </div>
                <div>
                    <input type="password" placeholder='password'/>
                    <button>Зарегистрироватся</button>
                </div>
            </div>

        </div>

    );
}

export default NameEmailPas;