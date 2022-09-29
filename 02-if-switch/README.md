#if
Utvärderar ett villkorl som sant/falskt och startar olika kodblock beroende på svar.
{} kan utelämnas om blocket endast består av en rad.
    if(condition){

    }

#Comparators
== equals value
=== equals type and value
!= value is not equal
!== not equal to value and? type

< less than
> greater than
>= greater or equal to
<= less or equal to

(a==b && c==d)
(a!=b || a!=a)

( (winnerIs(sweden) || (vinnerIs(norway) ) && ( !winnerIs(norway) && !winnerIs(sweden) ) )
 () på vardera sida om && måste vara sant

||
&&

switch(variabel)
    case x:{

    }