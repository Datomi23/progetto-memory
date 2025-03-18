import React, { useState } from "react";  

// inserisco l'array di oggetti --> associo nome uguale a carte uguali o stabilisco dopo la relazione?
const Images = [
    {id: "0", src: "🐶", nome: "cane", scoperta: false},
    {id: "1", src: "🐱", nome: "gatto", scoperta: false},
    {id: "2", src: "🐭", nome: "topo", scoperta: false},
    {id: "3", src: "🐹", nome: "criceto", scoperta: false},
    {id: "4", src: "🦊", nome: "volpe", scoperta: false},
    {id: "5", src: "🐼", nome: "panda", scoperta: false},
    {id: "6", src: "🐶", nome: "cane", scoperta: false},
    {id: "7", src: "🐱", nome: "gatto", scoperta: false},
    {id: "8", src: "🐭", nome: "topo", scoperta: false},
    {id: "9", src: "🐹", nome: "criceto", scoperta: false},
    {id: "10", src: "🦊", nome: "volpe", scoperta: false},
    {id: "11", src: "🐼", nome: "panda", scoperta: false},
]

const Griglia= () => {
    // qui dovrò mettere i valori e gli use state

    const [carte, setCarte] = useState(Images);
    const [bloccato, setBloccato] = useState(false);


function Uncover(idCliccato) {  

    if (bloccato) return;
    setCarte((prevCarte) => {
        const updateCarte = prevCarte.map((carta) => carta.id === idCliccato?
        {...carta, scoperta: !carta.scoperta} : carta
); 

    const carteScoperte = updateCarte.filter((carta) => carta.scoperta); //conterrà max due carte perchè viene eseguito quando ne ha 2

    // const cartaSelezionata = carte.find(carta => carta.id === idCliccato);
    // if (cartaSelezionata.scoperta) return bloccato; //--> FUNZIONE X LA CARTA SCOPERTA, NON FUNZIONA PERò




    //da qui le condizioni per eseguire il matching e l'eliminazione o la ricopertura delle carte
    if (carteScoperte.length === 2) {
        setBloccato(true); //stoppa la funzione e controlla
        setTimeout(() => {
            if (carteScoperte[0].nome === carteScoperte[1].nome) {
                setCarte(prev => prev.filter(carta => carta.nome !== carteScoperte[0].nome));
            } else {
                setCarte(prev => prev.map(carta => carta.scoperta ? { ...carta, scoperta: false } : carta));
            }
            setBloccato(false); // dopo 1 secondo (1000) è possibile di nuovo eseguire funzioni, quindi cliccare e girare carte
        }, 1000);
    
    
    
}

    
        return updateCarte;

});
}


return ( 
    <div className= "griglia">
        {carte.map((carta) => <button key={carta.id} onClick= {() => Uncover(carta.id)}>
            {carta.scoperta? carta.src : "🔲"}
        </button>
    )}
</div> 

);
}

export default Griglia;


// MANCANO CONTROLLI CHE IMPEDISCANO DI SCOPRIRE PIU DI DUE CARTE ALLA VOLTA
// MANCA CONTROLLO CHE IMPEDISCA ALL UTENTE DI GIRARE PIU VOLTE LA STESSA CARD.

// La funzione Uncover deve prendere in input la carta mappata dall'array
// di oggetti 'Images',  e nel button onClick poi, se lo stato di quella carta 
// (passata tramite nome o id), è TRUE; allora viene mostrata l'immagine
// associata a quella carta. 

//---------- altra soluzione: mappare in un nuovo array le carte scoperte
// e cambiare lo stato delle carte di quel nuovo array. 

// ???????????????????????????????????????????????????????????????????????// 

//La funzione Uncover crea una copia dell'array images con map e sostituisce all'interno con lo spread ... soltanto
// i valori boolean di 'scoperta' per le carte cliccate. 

// Nel <div> il button passerà alla funzione Onclick la funzione Uncover con parametro l'id della carta specifica: 
// per fare questo dobbiamo usare map per mappare un bottone per ogni elemento (oggetto) dell'array 'images'. 
// In questo modo a ogni bottone corrisponde un id specifico e una carta specifica. 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//