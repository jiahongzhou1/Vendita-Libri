# Vendita-Libri
Sito per la vendita e acquisto per l'anno nuovo :) 


## octavian prima di iniziare a lavorare o fare qualcunque cosa sul progetto usa questi comandi 
1.  ```
    npm install -g n lts
    ```
    scarica ultima vesione di node
2.  ```
    npm install -g @angular/cli 
    ```
    scarichi angular
    
3. 
    ```
    npm install 
    ```
    ti scarichi tutti i pacchetti delle dependency del sito che si trovano nel .gitignore

`PS: io ho l'abitudine di mettere commit con commenti a caso quindi in questo progetto cerchero di fare dei commit con più senso possibile quindi se puoi fai anche tu dei commit con nomi normali grz`
    
## se non ti lascia usare i comandi di ng dandoti un errore come questo -> 
```
disabilitata nel sistema in uso. Per ulteriori informazioni, vedere about_Execution_Policies all'indirizzo     
https://go.microsoft.com/fwlink/?LinkID=135170.
In riga:1 car:1
+ ng help
+ ~~
    + CategoryInfo          : Errore di protezione: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
per risolverlo ti basta aprire powershell con diritti di amministratore e usare questo comando -> 
```
Set-ExecutionPolicy -ExecutionPolicy  Unrestricted
```
poi `s` ed invio 

`PS: dopo quando hai finito oppure quando devi aprire qualche altro script ricorati di togliere questa modifica che in caso aprissi uno script dannoso avrebbe accesso a tutto il tuo comp 💀`

per farlo usa questo comando sempre su power shell -> 
```
Set-ExecutionPolicy -ExecutionPolicy  Default
```
poi `s` ed invio 

## comandi angular 
come visualizzare la pagina angular 
1. vai sulla directory del progetto 
```
cd .\Vendita-Libri\
```
2. usa questo comando per aprire il server 
```
ng serve -o
```
ti aprira direttamente il server in locale 

[PS: tutto quello che devi sapere per iniziare in angular puoi trovarlo qui](https://www.digitalocean.com/community/tutorials/getting-started-with-angular-using-the-angular-cli)

## template per il sito 
-  [Pagina intro/home](https://docs.google.com/drawings/d/1700hZ3xviCbaNBmh4zjfBlH9tL3JoaDXKQBlpEVrb6I)