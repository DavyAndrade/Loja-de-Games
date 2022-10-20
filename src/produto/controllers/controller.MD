## O decorator @Controller indica que a classe é do tipo RestController, que receberá requisições que serão compostas por:

## URL: Endereço da requisição (endpoint)
## Verbo: Define qual método HTTP será acionado na Classe controladora.
## Corpo da requisição (Request Body): Objeto que contém os dados que serão persistidos no Banco de dados. Apenas as Requisições do tipo POST e PUT conseguem enviar dados no Corpo da Requisição.
## Após receber e processar a requisição, a Classe Controladora Responderá com:

## Um Código de Status HTTP pertinente a operação que está sendo realizada.
## O resultado do processamento (Objetos de uma Classe, por exemplo) inserido diretamente no corpo da resposta (Response Body) 

## O parâmetro inserido dentro dos parênteses é usado para mapear as solicitações para os métodos da classe controladora PostagemController, ou seja, definir a URL (endereço) padrão do Módulo (/postagens). Ao digitar a URL do servidor seguida do caminho do Recurso (http://localhost:4000/postagens), a Classe Controladora enviará a Requisição para a Classe associada à este endereço (PostagemController) e o Respectivo Método, de acordo com o caminho e o verbo HTTP (GET, POST, PUT ou DELETE).

#######################################################################################

### O decorator @Get() mapeia todas as Requisições HTTP GET, enviadas para um endereço específico, chamado endpoint, dentro do Módulo Postagem, para um Método específico que responderá a Requisição, ou seja, ele indica que o Método findAll(), responderá a todas as requisições do tipo HTTP GET, enviadas no endereço http://localhost:4000/postagens/.

### O decorator @HttpCode(HttpStatus.OK) indica que o Método findAll(), terá como Resposta HTTP padrão o HTTP Status OK 🡪 200, ou seja, quando a Resposta da Requisição for positiva, será retornado o HTTP Status OK 🡪 200. Caso a Resposta seja negativa (algo deu errado), a Resposta dependerá do erro.

## O decorator @Post() mapeia todas as Requisições HTTP POST, enviadas para um endereço específico, chamado endpoint, dentro do Módulo Postagem, para um Método específico que responderá a Requisição, ou seja, ele indica que o Método create(@Body() postagem: Postagem), responderá a todas as requisições do tipo HTTP POST, enviadas no endereço http://localhost:4000/postagens/.


Linha 28: O decorator @HttpCode(HttpStatus.CREATED) indica que o Método create(@Body() postagem: Postagem), terá como Resposta HTTP padrão o status CREATED 🡪 201, ou seja, quando a Resposta da Requisição for positiva (o Objeto for persistido no Banco de dados), será retornado o HTTP Status CREATED 🡪 201. Caso a Resposta seja negativa (algo deu errado), a Resposta dependerá do erro.

Linha 29: Criamos o Método create(@Body() postagem: Postagem), que promete retornar uma Promise, que será enviada pela Classe PostagemService, contendo um Objeto da Classe Postagem.

@Body(): Este decorator insere o Objeto postagem enviado no corpo da Requisição, no Objeto postagem (parâmetro) do Método create(@Body() postagem: Postagem);