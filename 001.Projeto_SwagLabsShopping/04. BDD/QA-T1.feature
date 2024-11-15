Feature: Cliente sem cadastro e deseja criar uma conta
    @TestCaseKey=QA-T1
    Scenario: Cliente sem cadastro e deseja criar uma conta
        
        Given que o cliente esteja na tela de login
        
        And não esteja cadastrado no sistema
        
        When clicar em 'criar conta'
        
        Then será redirecionado para uma tela de criação de nova conta.