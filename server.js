let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router(),
    cors = require('cors'),
    port = process.env.PORT || 8080;

app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let students = [
    {   
        'id': 0, 
        'name': 'Nattapon', 
        'surname':'Sungkaew', 
        'fac': 'CoE',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp3DxxBPbD8mGX9MR0aYzBoj6DWuvBX5iMY_pgFcJIOVSBS5KB'
    },
    {   
        'id': 1, 'name': 'Jessadakorn', 
        'surname':'Kerdnu', 
        'fac': 'CoE',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo8DLURc9k9BFrha6eIcfEWvuPohk_PVy1ZPlWvaf0rmJwokL7'
    },
    {   
        'id': 2, 'name': 'Kittisak', 
        'surname':'Limsuebchuea', 
        'fac': 'CoE',
        'img':'https://png.pngtree.com/png-clipart/20190618/original/pngtree-glasses-wear-glasses-happy-happy-expression-png-image_3921074.jpg'   
    },
    {   
        'id': 3, 
        'name': 'Piyachart', 
        'surname':'Kongsuwan', 
        'fac': 'FHT',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsRQifArUC4dBF3mtQyQBBZAq8W4HufZOJs1cLIHOOnlOaPYer'
    },
    {   
        'id': 4, 
        'name': 'Bewky', 
        'surname':'Vongza', 
        'fac': 'CoC',
        'img':'https://previews.123rf.com/images/vectorkif/vectorkif1709/vectorkif170900013/85709526-business-man-cartoon-character-in-smart-clothes-office-style-young-handsome-businessman-in-suit-stan.jpg'
    },
    {   
        'id': 5, 
        'name': 'Voztazme', 
        'surname':'Belongwiz', 
        'fac': 'FIS',
        'img':'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPEhUQExIVEhMVEhUTGRUWFRYYFhcXFxcWGxYTFxgYHSggGBoxGxYYITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0iICYrLi0rLS0wLTUtLS8tLS0rLS0rKzUtLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tNy0tLf/AABEIAPYAzQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUIAgH/xABEEAABAwIDBAgADAMHBQEAAAABAAIDBBESITEFBkFRBxMiYXGBkaEUIzJCUmJykrHB0fCCssIkM2N0orPhNENTc9IW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACwRAQACAgEDAgQFBQAAAAAAAAABAgMRMQQSIUFxBRNhgSIjMkJRM6GxwfD/2gAMAwEAAhEDEQA/ALwREQEREBERAREQEREBEWGrqWQsdI84WtFyf3qe5BmRQ3a+947LW3jGEPkIsXtaQXBg4BxFgTnYnjZdHY28Ub4xJNPAwuzbGJGuLG8A9xN3P56LmLxt3NJiEhRcpu8lGTb4TF5uA/FdCnqWSDEx7Xjm1wI9lMTEuZiYZURFKBERAREQEREBERAREQEREBERAREQEREBQDpA2/brKYfM6t/2jZxPkLxnxup85wAJOQAuVQm29qsnc+VlwMbrEm/ZubMdy7On/Cqyz40txRG9se0arFia0/L6u3hYn8VtU8kTAIo24yNTew789bKMmfO3kPyA55lSLZO71dKLxxdW0gduTsDyB7R9FRML4nbq9QAPktv7D1Kxwxyxu6yN5Y4cWZfhwX1/+DrTmZ4ieWKQD1wLl1tJLQvaycPjvpI12Jh8P0NiodefVZe7O9/WEQVJa2Q5NkGTXHgHD5rvY93GYKkpWh7c3BxtcOAtiH4XU+6OtuuqY3wyOxPhLbOOrmOvhvzIII9FfjvM+JZ8lIjzCXoiK5SIiICIiAiIgIiICIiAiIgIiICIiDFVw9Yx7NMTHNv4ghVruhsJsdKGSNBc8lzwQDc3sBnyFvdWeoZFK2IyB7ms+PmtiIGRlfh17rLL1XENfScz7M1Dsqni7TIY2O5hjQfW11vLSrKxtOwySHCwC5NieIGg7yFwn78017NEj/ssH5lUQ1TqEqUc6QIGuopHEXLHMcPHG0H2cV9bP3qjme2PBLGXmwL2WaSdBfgV87/vtRuH0pGNPhe5/lUxy5twg1FARHlcsILm9zhq2/l7KS9FMl6yW2hgJ/1s/UqLMldEwdrIOP3XW/5Uy6HaUl1TPbIFsLT35uePQsV2PzZmyeKrNREWplEREBERAREQEREBERAREQEREBERAJsqW21tPZ8znzubNKHyOPWE4QLuNmi7sraWy0V0qqavdV8ZdT9VHLEH4iTZuI2BBte4OefNZ8/EL8G9zpnfvIJWFjaeR/VsaXE2LQC24xWuNBdcuXa0jInztjgYxjQ7JjnE3IAAzbzXe3e2WWxTY7DrnFtm3sGNZh1OueJc5uxKtrGwhkbmgYblws8c3NIWbVZa579f94cGLeqrkYyZgZI0kAsEQuHjMtABxE8QV9bc34dPD1MlO6J+Jrg44gOyb/JIv3a8VJtmbtysfEXCONkb+sws+c6xAJPHUrD0km0UfIYsvSx9vddx2x6K9XmNzKCU7JawllPG+U2zwjQcC46Djqrw3K2P8Co44TYvzc8g3GNxu4X42yHkFGN1qIwU8cDQWEsEkjm2BMjhfCTrkLDyU42Q1wibj+UQCfGwHDwVuK0TaYhXmpMViZluIiLSyiIiAiIgIiICIiAiIgIiICIiAiIgKPbVZaSQaXAI8xb8QVIVzdtQXAf9HI/ZP/P5qjqK7p7NHTX7b+6MxzzsDWDqQxtgS4m5A7hYA271tCtZnZ2MjXAC7+W9vNchz6SjOCURk3Lm9Y43wkmwtoQNPJdxjyQBZrWjRjAA0d9hxWTUa3Mt/netf3ZBIVz949itrYwwnCWva4HuuMTfNt/Oy6DG+i36CnLyHfNBvfnbl3LqkTMuMkxEeWOh2a++JzQznmCfK377l2QLZL9RbaY4pw8/JktefIiLmbXmLSCDoL+d8vwS9+2Nox077ah00QIu3AiIgIiICIiAiIgIixGpYDhLgD3/AKqJmI5TETPDKi+JH2aXDOwJWDZ9RjbmbkFR3RvSYrOttpERdORfL2BwIOhFj5r6RBD9tbtCZzS8PIbkcABD2g3seLfJfO0NqxwHA4WcAOzbMZZZcMua2t7N9qfZ5EX99UO+TE06X0Mh+YPc8Aoru3GZWfCZe3JIcZJ+k7tEjlqAOQFlhz1ikeJel01py7nTemqpZmlziYowCbD5Z/RTXYJb8Ghwm46po8wLH3uoNtafLCMwLE97vmt/M9wWLdnfiKieaOqOBlg+OUBxALnOxMeBewuLg95unTTrzb1OurFccW+qzUWCirYp2iSKRkjD85jg4eoWdbnmiiW064yTANOWLEPrBpFmju4nuUmrXWjeRqGO/BQyAl0juDQBd3HwHnx7lj6q87ird0dI1Np9ki2ftjEcMltbYgCLHk5pzHiuwotBTuL2DJ4xCzr2e0X421H7spSrcFrWjyp6ilazGhERXs4iIgIiICIiDXr3EMNr37v3oo+9xJJN/EG+fepO4XyXHqtlOFy3td2jv0Ky9RS0+YbOlyVr4lzPhLwQGutiOoNiLZnLyWWnqcBDgcx79y+KaBweXvbhOgBFjZcnfTabaKkkmuMWEtYDxe7JoHPP2BWSO7lstNIid8J7DK14DmkOBzBBBHqF9rz30Y7xz7Nu3N8DjifEeBNu0y/yX2F+R0PMX3s2viqY2zROD2O0I9wRwI4hehjzVv4h4dMsX4bKq7pL37LAaalkw9rA+Zp48WMI0A4uHgOK2+kffbqsVHTu+M0keD8nnG0/S5nhprpUlZJiDWnO1/yss2fqY32V+6jNm89sfdsQhsUgc7QXffUuNtb8Sc81NthbfaKcnDhLBpqGi2veLW88lAY2kRZ6Z4PDQj1zCkFMwBt7ajPvt+wqsdd1mJ/l6/wiZ+Xavpv/AC2qDei5LZxZhcS19s23PHmO9cve+MGYEEEOhaQRobOdYhaO0X9vPgPfgtOTFctddthk3uOfl5KM1v2qfifVc4NfxO/q7G7G030cjZonWffT5rh9Bw4i2vjlmr82DtiOthbNHxyc06scNWH95gg8V5opprOB5FSvczeh+z5sRu6J9hI3mPpD6wuSPMcUw5vlW1PEvKxZfl21PCyekTfBuzjTwFotUPIe86Rxtw3dlxJcPIOQU8cjQ8OxMLQbh3ZI1BuMrKE9KlVFV1DCHh0Yp2YSMwcRc45eBb6KBupWsaWh3ZOrQXhp8W3sVOfJW1/Ldi+IfJ3XW1x7l73RVlfJSQxF8UcJeJwezia5oIA4tOLI34HK2asNVt0JbJEdPLVEWMr8DfsR3uR/GXD+EKyVuwx+CExktk/FYREVoIiICIiAiIgIiIIvv5umdpxswTyU80Rc5j2OIBxAAtdbO2QzGnfoqQ29syrppRFWGUvFy10j3SNI+lGTkR3jPmvS60tsbJgrIzDPGJGHgdQfpNIzae8KjNh748T5VZMc2jxLza2fLCPkjO3Px5rt7J3mqKUSCF5j6xpaeIvaweBwcODgulvh0d1FDeaDFPT65C8jB9do+UPrDzA1UNjlBXl3pfHLz7VtSWWUkXJzOt+fffitQSXdbuUj3e3UqdpkNibhjBs6ZwOBvMD6bu4edlYO8G49NRbJqGRNxSBjZXTOsXu6tzXEfVbYHIe5zVmLBNqzZ3jxTNZsqOF12lh1BYPcAH0UgpzqFxGwG0b+bgD4XBH4H1XWabG6tw/p+76H4PH5Np+v+nKcfjS4mwabm/C3H391jll6x2K1haw527/VfTxjlc3hixHwaF8SOyJ48lRmn8UvF6+2+ov7sb9mzNiFV1bupMhi6y3ZxixwnlrkeNiOBX7E+69EbvbAjgoY6ORjXt6q0jXC4c53akuPtEqr99OjmSjJnpQ6Wn1LNZIhx73s79Rxvqr83TT27hxkwz27RIyWYG8TmfyWnK0uIa0EuOQA4k5ADvus73XNxopL0ZbDdWVzZSLxU5ErjbLEP7tnji7Xg0rLirNr6hnxxNrahdO7+zRSU0NOP+3G1pPN1u07zdc+a6CIvbiNPWiNCIikEREBERAREQEREBERAXErd0dnzP6ySkic8m5OG1zzda2LzXbRRMRPKJiJ5fEMTWNDGtDWgWDWgAAcgBotHeKIPpKhh0dTyt9WOXRXO3kfhpKl3KmmPpG5LcSTw88xPvHH9toXQAvkuPTk4QPrs/Rdtj8Au/CD3aledg/S9D4PP5E+7kxDOZ3l6krY3ei6yspWH5JqoQe/4xuSxwNxCTmXFfexXBlXTOvfDVQHuykaqLf1fu8Lqp31FveXpNERey3OJXbobPncXyUsZccyQMJJ5nDa66Oztnw0zBFDG2JgzwtFhc6k8z3raRRFYjiERWI4gREUpEREBERAREQEREBERAREQEREBczeeF0lHUxsBc99NM1rRqXGNwAHfddNFExuNImNxp5m6p9msw4XB4BxXFnA8RwWwIpngi7QAbanh3WUm6RqIt2nIQ4gSsiltwybh/GNRqpnY1xBeW9oki2ptbLPuWbFi7ImJ8+VnTTfDWaxPqwxRFofY3NyL6DvOa/Nm07pZ4Y4yDIZmBudm4sQsLlHMc7Rwwk3GWa7e69JG2op5XaieIk5D5LxmfxVMdLu82mfVlnpZtebWn1X4iIvQXiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCrOl2HDU08v0ons+48EfzlQLa0QDmyWuA4EjmARcfvmrP6YYviad/KZzPvMJ/oVeSR9ZER9UjzC4nlZHD82xs/wCC1E1PwjlIb9h3ajP3XBftC7IjvupV0p7Pwy09UNJYRG77TO00+Ja4/cURoT2vJRPKY8wvvYtX18EUvF8bSfG3a97rdUZ6O58dGG/Qkez3xf1qTKyFUiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCG9K8GKhx/+OeJ3kSWf1qrKJ2rfNXdvbQ/CKKoiAuXQuLR9ZoxM/1AKiqN/aaef5riyyvC2986L4TsrGM3RxR1A/gaC/8A0F4VS0rrOH71V3boTNnoYgcwGGJw+zdtj5W9VSlXRmmmfAdYpXR+IaeyfMWPmliv8LV6MHfESj/Gv6sb+imahvRgP7PKf8f+hn6qZLqOHE8iIilAiIgIiICIiAiIgIiICIiAiIgIiICIiD8IvkvO7gIZZGAXEcskYueDXED2C9ErzttT/qan/Mzf7jlzZ3RZfRZW3E0XDsygePZd+DVHOleg6qtZMAA2aHUaufGbOLv4SwZcl0eit953f+h3s9i++mtthSP5PlHr1Z/JPQ/czdFNeMUkHBzQ8Xyzbk72I+6rHVM9HNRatibw7Y9WO/OyuZTXhFuRERS5EREBERAREQEREBERAREQEREBERAREQF542wP7VVf5mb/AHHL0OvPm3W2q6n/ADM385XNndEz6Jm/HPP+C73e39FtdNjP7NA7lOR6sd/8rH0Ss7cp5Rt93E/kt7pljvQsP0ahh9WvH5p6InlBdxJbVdO7m9g+8QPzV7Lz5uhJaeB3KWM+kjV6DSpYREXTkREQEREBERAREQEREBERAREQEREBRfaO+sML3M6tzi1xbqADY2NtclKFDNq9H8csjpIqiSHG4vLSA9t3G5IBItme9cX7v2rsPy9/mOdX7/TOBEUbY/rHtEd4vYeoKhU9H17y4l2Nzi5zhqSTckg5aqdxdGjSfjKyVw5MYxl/PNbE3RnSF12z1UYNrtbKLac3NJ91V25JbYz9NWNVqy9Guz2xQvfe8hkMbjwsw3ZlwNnBffSdC2WjMNwJHvaWXNhdpGIk2OVifMhdzYGw4KCLqYGkNLi8lzi5znEAFxJ42aPRcffnd+preqMEkbcGK7ZLgHFhsbhrjw91bO4r9WOs0nLufEKv2TsmWmkY9+F7GvaXBrrOwggmxNs8lfDHhwDgbggEHmDoVVbej/aRNjLSsbxIdK4jwBYAfVWbsylMMMcRdjMcbGF5FsRa0DFbhoucfd6rOp+V47GyiIrWQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q=='
    },
    {   
        'id': 6, 
        'name': 'Stylish Man', 
        'surname':'Business ', 
        'fac': 'FTE',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTno324PU4vbTl_nIi4RlJB_C_JklXHPciGZZmIM6f4aAc0lswr'
    },
    {   
        'id': 7, 
        'name': 'Key Man', 
        'surname':'Business ', 
        'fac': 'CoC',
        'img':'https://image.freepik.com/free-vector/hand-drawn-fashion-man-illustration_23-2148227816.jpg'
    }
    ,
    {   
        'id': 8, 
        'name': 'Perfact Man', 
        'surname':'Business ', 
        'fac': 'CoE',
        'img':'https://image.freepik.com/free-vector/fashion-illustration-with-male-model_23-2148216248.jpg'
    }
];

router.route('/students')
        .get(cors(),(req, res) => res.json(students))

        .post( cors(),(req,res) => {
            let student = {}
            student.id = students[students.length-1].id+1
            student.name = req.body.name
            student.surname = req.body.surname
            // student.grade = req.body.grade
            // student.year = req.body.year
            student.fac = req.body.fac
            student.img = req.body.img
            students.push(student)            
            res.json( {message: 'student created!'} )
        })

router.route('/students/:student_id')
        .get((req,res) => {
            let id = req.params.student_id
            let index = students.findIndex( student => (student.id === +id) )
            res.json(students[index])
        })

        .put ( (req,res) => {                               // Update a bear
            let id = req.params.student_id
            let index = students.findIndex( student => (student.id === +id) )
            students[index].name = req.body.name
            students[index].surname = req.body.surname
            // students[index].grade = req.body.grade
            // students[index].year = req.body.year
            students[index].fac = req.body.fac
            students[index].img = req.body.img   
            res.json({ message: 'Student updated!' + req.params.student_id});
        })
     
        .delete ( (req,res) => {                   // Delete a bear
            // delete     bears[req.params.bear_id]
            let id = req.params.student_id
            let index = students.findIndex( student => (student.id === +id)  )
            students.splice(index,1) 
            res.json({ message: 'Student deleted: ' + req.params.student_id});
        })
     

app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!!!')
  })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})