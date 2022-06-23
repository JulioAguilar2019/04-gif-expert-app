import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas para AddCategory', () => {


    const name = 'Naruto'
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox');

        //console.log(input);
        fireEvent.input(input, { target: { value: name } })
        expect(input.value).toBe(name)

        //screen.debug()
    })


    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        // TODO:

        render(<AddCategory onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: name } })
        fireEvent.submit(form)
        screen.debug()
        expect(input.value ).toBe('')
    })

})