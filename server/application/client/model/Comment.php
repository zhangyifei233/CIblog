<?php

namespace app\client\model;

use think\Model;
use think\Db;
use think\Exception;

class Comment extends Model
{
    public function getCommentList()
    {
        return Comment::all();
    }
    public function getCommentById($aid)
    {
        return Comment::get($aid);
    }
    public static function getCount()
    {
        return count(Comment::all());
    }
    public function editComment()
    {
        return $this->save();
    }
    public function addComment()
    {
        return $this->save();
    }
    public function editStutas($cid, $status)
    {
        return $this->save([
            'status'  => $status,
        ], ['cid' => $cid]);
    }

    public function delComment($cid)
    {
        return Comment::destroy($cid);
    }
}