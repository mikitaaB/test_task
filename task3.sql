-- Выведите название групп и суммарное количество проданных копий альбомов,
-- для тех исполнителей, суммарные продажи альбомов которых
-- превысили 2 000 000.
Select public."Artists"."Singer", SUM(public."Artists"."Sale") "Sum sale"
from public."Artists"
group by "Singer"
having SUM(public."Artists"."Sale") > 2000000