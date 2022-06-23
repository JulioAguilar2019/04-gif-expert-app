import { any } from "prop-types"
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en get Gifs', () => {

    test('Debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('Naruto')
        console.log(gifs)
        //DEfino los elementos que espero y luego con expect.any 
        //Le digo que espero lo que sea mientras sea un String
        const elements = {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        }
        //Le digo que debe ser mayor a 0 
        expect(gifs.length).toBeGreaterThan(0)
        //Le digo que debe contener la estructura que defini anteriormente
        expect(gifs[0]).toEqual(elements)
    })

})