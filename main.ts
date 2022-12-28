let matrix = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB)
matrix.setMatrixWidth(8)
matrix.setMatrixColor(0, 0, neopixel.colors(NeoPixelColors.Red))
matrix.show()
