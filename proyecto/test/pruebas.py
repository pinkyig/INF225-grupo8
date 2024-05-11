import unittest
import requests
from operaciones import suma

class TestOperaciones(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        response = requests.get("http://localhost:5000/api/ficha/21.000.999-5")
        cls.ficha = response.json()

        res = requests.get("http://localhost:5000/api/horas")
        cls.horas = res.json()
        cls.resultado_esperado = {
            "alergias" : "No tiene",
            "especialidad": "Imagenología"
        }
    
    @classmethod
    def tearDownClass(cls):
        del cls.resultado_esperado
        del cls.horas
        del cls.ficha

     #el paciente en el apartado de operaciones se debe señalar sus operaciones o que no tiene operaciones , no puede quedar vacio
    def test_operaciones(self):
        operaciones = self.ficha['operaciones']
        self.assertNotEqual(operaciones, "None" or "null" )

    #el paciente cuando no posee ninguna alergia identificada se debe señalar que no tiene alergias
    def test_no_alergias(self):
        alergias = self.ficha['alergias']
        self.assertEqual(alergias, self.resultado_esperado["alergias"])
    
    #el apartado de derivado debe señalar el nombre del medico que lo deriva o señalar que nadie lo deriva , no puede quedar vacio
    def test_derivado(self):
        for hora in self.horas:
            self.assertNotEqual(hora["derivado"] , '')

    #todas las horas deben pertenecer al area de Imagenología y se debe señalar en cada hora
    def test_Imagenologia(self):
        for hora in self.horas:
            self.assertEqual(hora["especialidad"], self.resultado_esperado["especialidad"] )

if __name__ == '__main__':
    unittest.main()