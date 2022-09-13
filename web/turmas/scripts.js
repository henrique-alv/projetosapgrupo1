function show()
{
    return confirm('Confira os dados antes de prosseguir: \n\nCurso: '+document.getElementById('curso').value + '\nNome: '+document.getElementById('nome').value + '\nAno: '+document.getElementById('ano').value + '\nSerie: '+document.getElementById('serie').value)
}