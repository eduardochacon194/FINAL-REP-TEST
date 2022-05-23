const controller = {};
const axios = require('axios');

controller.get_view = async (req, res) => {
    get_json()
    axios.get('new_pokes.json',{
    })
    .then(response => res.send({success : true , response: response.data}))
    .catch(error => res.send({success : false , message: error.message}))
      
};
controller.get_post = async (req, res) => {
    axios.post('new_pokes.json/api/', {
        name: random(10, 200)
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
};
controller.get_put = async (req, res) => {
    const id = req.params.id;
    axios.put('new_pokes.json/apiput/:id', random)
    .then(response => this.setState({ updatedAt: response.data.updatedAt }));
      
};
controller.get_delete = async (req, res) => {
    const id = req.params.id;
    axios.delete('new_pokes.json/api/:id', { response: { id: id } });
      
};
module.exports = controller;

function get_json() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151', {})
        .then(response => {
            if (fs.existsSync('../public/new_pokes.json')) {
                console.log('Existe');
            } else {
                fs.writeFile('../public/new_pokes.json', JSON.stringify(response.data), function(err) {
                    console.log('Creando Json');
                });

            }
        })
        let rawdata = fs.readFileSync('../public/new_pokes.json');
        let jpar = JSON.parse(rawdata);
        obj = new Object();
        for (let i = 0; i < jpar.results.length; i++) {
            obj.name = jpar.results[i].name;
            obj.order = i;
            let jsonString = JSON.stringify(obj);
            console.log(jsonString)
            fs.writeFile('test.json', jsonString, {
                flag: 'a+'
            }, err => {});
        }

}
function random(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }