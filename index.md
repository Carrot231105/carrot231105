
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài Tập Web 2026 - Võ Trần Thiên Vũ</title>
    <style>
        /* PHẦN TRANG TRÍ (CSS) */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            max-width: 600px;
            width: 100%;
            text-align: center;
        }

        .student-info {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        h1 {
            color: #2c3e50;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .subtitle {
            font-style: italic;
            color: #16a085; /* Màu xanh ngọc */
            margin-bottom: 30px;
        }

        h2 {
            font-size: 18px;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            margin-top: 30px;
            text-align: left;
        }

        ul {
            list-style-type: none; /* Bỏ dấu chấm tròn mặc định */
            padding: 0;
            text-align: left;
        }

        li {
            margin: 10px 0;
            background-color: #f9f9f9;
            border-radius: 8px;
            transition: transform 0.2s;
        }

        li:hover {
            transform: translateX(5px);
            background-color: #e8f6f3;
        }

        a {
            display: block;
            padding: 15px;
            text-decoration: none;
            color: #2980b9;
            font-weight: bold;
        }

        a:hover {
            color: #16a085;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="student-info">
            Võ Trần Thiên Vũ - THK47SP
        </div>

        <h1>Xin chào! Đây là trang web đầu tiên của mình.</h1>
        
        <p class="subtitle">Mình đang học lộ trình Frontend theo roadmap.sh</p>

        <h2>Danh sách bài thực hành:</h2>
        <ul>
            <li><a href="file:///E:/2025-2/Lab_01_TKWeb/index.html">Bài thực hành số 1 (Lab 1)</a></li>
            </li>
            <li>
                <a href="./Lab2/index.html">Bài thực hành số 2 (Lab 2)</a>
            </li>
        </ul>
    </div>

</body>
</html>
