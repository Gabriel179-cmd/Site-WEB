function Chercher() {
var recherche = document.getElementById('mot').value;
window.find(recherche);
return true;
}
function date_heure(id)
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = 'Nous sommes le '+jours[jour]+' '+j+' '+mois[moi]+' '+annee+' et il est '+h+':'+m+':'+s + ' ' + '(heure locale)' ;
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','1000');
        return true;
}
//<!-- /* Teste de connexion*/
            var image = 'http://www.supportduweb.com/ftp/ybouane/scripts_astuces/javascript/vitesse_connexion/image.png';
            var size = 158298;
            var time1 = 0;
            var time2 = 0;
            function start_test_vitesse()
            {
                time1 = new Date();
                time1 = time1.getTime();
                var img = new Image();
                img.src = image+'?'+time1;
                img.onload=end_test_vitesse;
            }
            function end_test_vitesse()
            {
                var time2 = new Date();
                time2 = time2.getTime();
                var ms = time2-time1;
                var vitesse = Math.round(size/ms*100)/100;
                document.getElementById('vitesse').value=vitesse+'ko/s';
            }
        //-->
		
/* Méteo*/
(function() {
        var my = document.createElement("script"); my.type = "text/javascript"; my.async = true;
        my.src = "https://services.my-meteo.com/cartes/js?pays=france&periode=24&taille=mini&x=245&y=235&d=0&id=4bf1952fc782db42d53db62335bd3ac3";
        var z = document.getElementsByTagName("script")[0]; z.parentNode.insertBefore(my, z);
        })();

(function() {
            var my = document.createElement("script"); my.type = "text/javascript"; my.async = true;
            my.src = "https://services.my-meteo.com/cartes/js?pays=france&periode=48&taille=mini&x=245&y=235&d=0&id=9543b16f06f7af949576d5c1ffffae4e";
            var z = document.getElementsByTagName("script")[0]; z.parentNode.insertBefore(my, z);
            })();