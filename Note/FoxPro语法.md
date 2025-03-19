### `&&` 行内注释（单行注释）

```
CREATE TABLE students (  && 创建一个学生表
    student_id C(10),    && 学生编号（10个字符）
    name       C(50),    && 姓名（50个字符）
    age        N(3),     && 年龄（最大3位数）
    gpa        N(4,2),   && GPA（4位，其中2位小数）
    enrollment D         && 入学日期（Date类型）
)

USE students  && 打开 students 表
LIST ALL      && 列出所有数据
```

### `*` 星号注释（整行注释）

```
* 这是一个学生管理系统的数据库
* 下面的代码创建一个表

*CREATE TABLE students (  
*    student_id C(10),
*    name       C(50),
*    age        N(3),
*    gpa        N(4,2),
*    enrollment D
*)

LIST NAME, AGE  && 列出姓名和年龄
```

### 多行注释（屏蔽代码）

```
#IF 0
    CREATE TABLE students (  
        student_id C(10),
        name       C(50),
        age        N(3),
        gpa        N(4,2),
        enrollment D
    )
    USE students
    LIST ALL
#ENDIF
```

