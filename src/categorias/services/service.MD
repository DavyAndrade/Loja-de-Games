




## Timestamp: Basicamente representa um instante único, um ponto específico na linha do tempo, e seu valor corresponde a uma determinada quantidade de tempo decorrida a partir de um instante inicial. Dentro do nosso contexto, a aplicação consultará o Sistema Operacional para obter a data e a hora e gravará em um Atributo do Objeto (data, por exemplo) o momento exato em que ele foi criado ou atualizado.

## O decorator @Injectable indica que a classe é do tipo Service (Classe de Serviço), que pode ser Injetada em outras Classes através da Injeção de Dependências.


## O decorator @InjectRepository(Postagem) é a implementação utilizada pelo TypeORM para aplicar a Inversão de Controle (IoC), sempre que for necessário. A Injeção de Dependência define quais Classes serão instanciadas automaticamente e em quais lugares serão "Injetadas" quando houver necessidade.

Inversão de Controle: ou IOC é um princípio de design de programas de computadores, onde a sequência de chamadas dos métodos é invertida em relação à programação tradicional, ou seja, ela não é determinada diretamente pelo programador e sim pela Linguagem ou Framework. É a transferência da responsabilidade de Criar e Instanciar Objetos para a Linguagem ou Framework. A Injeção de Dependências é um tipo de Inversão de Controle. */


// A Interface Repository nos auxilia na interação com o Banco de dados. Esta Interface contém diversos métodos pré-implementados para a manipulação dos dados de uma Entidade, como os métodos para salvar, deletar, listar e alterar dados dos objetos persistidos no Banco de dados (CRUD). Outra vantagem da Interface Repository é que os Métodos de consulta permitem criar qualquer consulta SQL que você precisar, de forma simples e rápida.

// Promise: É um objeto usado para processamento assíncrono. Uma Promise na prática é uma promessa, que representa um valor que pode estar disponível agora, no futuro ou nunca. Uma Promise é como um "procurador" para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que os métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

/*	
 O Like não ignora se a string está em maiúsculo ou minúsculo, ou seja, ele faz uma busca literal.
 Exemplo: GENERATION é diferente de generation.
 ILike	O ILike (Insensitive Like), ignora se a string foi digitada com letras maiúsculas ou minúsculas. Na prática o que o ILike faz é converter a string digitada e o conteúdo do Atributo para letras maiúsculas e só então ele compara as duas.
 Exemplo: GENERATION é igual a generation.
 */