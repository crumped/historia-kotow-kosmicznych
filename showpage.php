<?php
require 'cfg.php';

function PokazStrone($alias)
{
    global $link;
    $alias_clear = htmlspecialchars($alias);
    $query="SELECT * FROM page_list WHERE alias='$alias_clear' or page_title='$alias_clear' and status=1 LIMIT 1;";
    $result = mysqli_query($link, $query);
    $row = mysqli_fetch_array($result);

    if(empty($row['page_title'])) {
        $web = '[nie_znaleziono_strony]';
    } else {
        $web = $row['page_content'];
    }
    return $web;
}