export function tribonacci(signature: [number, number, number], n: number): number[] {
    // your code here
    if(n < 0) return []; 
    
    let trib: number[] = [ ...signature ];

    for (let index : number = 3; index < n; index++) {

    trib.push(suma([trib[index-1], trib[index-2], trib[index-3]]));

    }

    return trib.slice(0, n);
}

export function suma(numeros: number[]): number{
    return numeros.reduce((acumulator, currentValue) =>  acumulator + currentValue, 0);
}