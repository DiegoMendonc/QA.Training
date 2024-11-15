Feature: Cliente com cadastro informa dados incorretos de acesso
    @TestCaseKey=QA-T3
    Scenario: Cliente com cadastro informa dados incorretos de acesso
        
        Given que o cliente esteja na tela de login
        
        And adicione um username correto
        
        But escreva uma senha incorreta
        
        When clicar em clicar em “criar conta”
        
        Then uma mensagem surgirá avisando que a senha está incorreta