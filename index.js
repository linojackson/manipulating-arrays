/*
 * Uma empresa de segurança foi contratada para vigiar um longo muro. De acordo com o contrato, além de fazer o monitoramento através de câmeras e sensores, a empresa deve também fazer uma inspeção diária no muro, procurando por rachaduras, buracos e outras fragilidades estruturais. Por se tratar de uma tarefa delicada, são enviados guardas para percorrer a extensão do muro e detectar essas falhas. No entanto, como os guardas trabalham em turnos diferentes, a empresa suspeita que muitos guardas acabem passando pelo mesmo trecho do muro, o que indica que esse processo possa ser otimizado. Afim de verificar essa hipótese, a empresa pediu para que seus guardas registrassem o ponto inicial e final de suas patrulhas em uma planilha.

 Escreva uma função que, dados os pontos iniciais e finais da patrulha de dois guardas, determine se eles passaram por algum trecho do muro em comum. Considere que o objeto { start: a, end: b } represente a posição inicial (a) e final (b) de um guarda com relação à metade do muro. A função deve retornar `true` caso haja algum trecho em comum e `false` caso o contrário.
 */

function hasOverlap(interval1, interval2) {
    let arrInterval1 = []
    let arrInterval2 = []
    if (interval1.start < interval1.end) {
        let pos = 0
        for (let index = 0; pos < interval1.end; index++) {
            pos = interval1.start + index
            arrInterval1[index] = pos;
        }
    }else{
        let pos = 0
        for (let index = 0; pos < interval1.start; index++) {
            pos = interval1.end + index
            arrInterval1[index] = pos;
        }
    }
    
    if (interval2.start < interval2.end) {
        let pos = 0
        for (let index = 0; pos < interval2.end; index++) {
            pos = interval2.start + index
            arrInterval2[index] = pos;
        }
    }else{
        let pos = 0
        for (let index = 0; pos < interval2.start; index++) {
            pos = interval2.end + index
            arrInterval2[index] = pos;
        }
    }

    const intesection = arrInterval1.reduce((acc, item) => {
        const comparsion = arrInterval2.reduce((acc2, item2) => {
            if (item == item2) {
                acc2 = true;
            }
            return acc2;
        }, false)
        comparsion ? acc = true : acc;
        return acc;
    }, false)
    
    return intesection
}

let testCase = 0

const test = (interval1, interval2, expectedResult) => {
  const result = hasOverlap(interval1, interval2)
  if (result === expectedResult) return console.log(`${++testCase}. ${result} - ✓`)
  return console.log(`${++testCase}. ${result} - ✕ (expected ${expectedResult})`)
}

test({ start: 0, end: 1 }, { start: 2, end: 3 }, false)
test({ start: 1, end: 3 }, { start: 2, end: 4 }, true)

test({ start: 2, end: 3 }, { start: 0, end: 1 }, false)
test({ start: 2, end: 4 }, { start: 1, end: 3 }, true)
test({ start: 4, end: 2 }, { start: 1, end: 3 }, true)
test({ start: 1, end: 4 }, { start: 2, end: 3 }, true)
test({ start: 2, end: 3 }, { start: 1, end: 4 }, true)
test({ start: 1, end: 2 }, { start: 2, end: 3 }, true)
test({ start: 1, end: 2 }, { start: 3, end: 2 }, true)
test({ start: 1, end: 1 }, { start: 1, end: 1 }, true)
test({ start: -2,  end: 3.14 }, { start: 2,  end: 4.2 }, true)
