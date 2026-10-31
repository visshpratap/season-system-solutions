$ErrorActionPreference = 'Stop'

$images = @{
    'casement-set.webp' = 'https://www.haport.in/storage/products/J0Nqmyr09l1nTqt5lzHEKXUHohATkL37pdoRVvvt.webp'
    'casement-set-premium.webp' = 'https://www.haport.in/storage/products/ZroN9PjD0ZcEBJfnWGQdnB9DqtKCe7dbTfI4veEq.webp'
    'bathroom-set.jpg' = 'https://www.haport.in/storage/products/SjKuklZ3pbwW1KFUB2Ydnj64PfRCBzbhk9Ts2nPS.jpg'
    'bathroom-set-premium.webp' = 'https://www.haport.in/storage/products/xJtgXy1pAd1Jyhrq392iPJUK6vfvPo3FWg3FV35e.webp'
    'casement-door-handle.webp' = 'https://www.haport.in/storage/products/ktidjGi5kNKDBmIaaQDmPje3URXrBiawRIIH9Yoa.webp'
    'cockspur-handle.jpg' = 'https://www.haport.in/storage/products/iZDNZQbJBKzYSGwKg18cwg67mHBcZQZMbr9tSvDN.jpg'
    'u-handle.webp' = 'https://www.haport.in/storage/products/voTvvyxmEC30TIGHax1telNuJOX3oQN4OZEDyrWg.webp'
    'case-double-key-knob.webp' = 'https://www.haport.in/storage/products/n26IDdRhx19YWAUirqUT68IvxhpaX0DBXtCoJQXp.webp'
    'case-double-key-plain.webp' = 'https://www.haport.in/storage/products/PteiSIY3KegzifT8BZIiAFJlMZoTZheM33VOvdDr.webp'
    'case-handle-key.webp' = 'https://www.haport.in/storage/products/iTA1Bm7EmEn17PjSgYwUZKDD771CpXyU6aF9hFUo.webp'
    'roller-8-wheel.jpg' = 'https://www.haport.in/storage/products/yyqh7o9oCr3uD77xLQr6RvPxBmfE9M0Cb3RnT57I.jpg'
    'roller-4-wheel.jpg' = 'https://www.haport.in/storage/products/EFLb1GOcDQZLE8UqqDeyzeWYgx6zY1v4OKJOFley.jpg'
    'roller-mesh-10.webp' = 'https://www.haport.in/storage/products/YuZGUCk0IKhXDDDoAKq9KfuXILlNqrW2rF8RL5zY.webp'
    'roller-mesh.webp' = 'https://www.haport.in/storage/products/FFQ9goW2XN609VLQVniYnkpOpHOJQeWNfKoCv9Pg.webp'
    'roller-double-flat.webp' = 'https://www.haport.in/storage/products/j92lPsSLhJZhwczqJBN3kDgGeRMV0SHuVSrUtEDX.webp'
    'roller-single-flat.webp' = 'https://www.haport.in/storage/products/klWL7ioMtnU08BQqkViBPjknqnUhJpr3r1X0DdqM.webp'
    'roller-adjustable-metal.webp' = 'https://www.haport.in/storage/products/wxP8IYOcK2ToTpMtWZ1iT4ikHOERu1MxDY0U1ze2.webp'
    'roller-adjustable-nylon.webp' = 'https://www.haport.in/storage/products/8pubXgEjKtwXuMpy9VdvPe1G0vcXa5WeaUpJqERF.webp'
    'roller-ball-bearing.webp' = 'https://www.haport.in/storage/products/lPlGKVaKPFBvQf2wnuMNSZ6bthgs8giwGfKHgFfq.webp'
    'hinge-concealed-door.webp' = 'https://www.haport.in/storage/products/VAFTepN8U8153ZYdYkhihTQmwMaxnuMAyDKuMJKj.webp'
    'hinge-concealed-window.webp' = 'https://www.haport.in/storage/products/MYLrcOzbNZepK6wBTaWdKYpIgc6lAracmKAGfyd6.webp'
    'hinge-3d-zinc.webp' = 'https://www.haport.in/storage/products/g1BOZGykKurHrP5N2Mk6Aw6MNSzGpDIoHRWJOE5g.webp'
    'hinge-3d.webp' = 'https://www.haport.in/storage/products/pD0QKvd5553pS4XbThE804h9EWZtQIdZOGspsCRT.webp'
    'hinge-flat.jpg' = 'https://www.haport.in/storage/products/5ER0QSfVhAYe0DXMg867CdqEyV6CfYfHSOoVYYfb.jpg'
    'hinge-butt-100.webp' = 'https://www.haport.in/storage/products/7TU6DgdoibkzdJmLA24IFUl2dEtRelhuWnvU6BTX.webp'
    'sliding-d-handle-long.webp' = 'https://www.haport.in/storage/products/pYdgvgRkckqzqIJOIUjKH7LPi4vDv8fiyf4ThVsq.webp'
    'sliding-d-handle-short.webp' = 'https://www.haport.in/storage/products/BY0jYT1jLx1fkxbsRGyQwZJQ1MkzTRDmQJ2f6yTR.webp'
    'sliding-touch-lock-lg.webp' = 'https://www.haport.in/storage/products/9mmjwXMMXkWlkSUWMGanwZewGCX7HyMkftBh5B3j.webp'
    'sliding-touch-lock.webp' = 'https://www.haport.in/storage/products/NpIi5lMvIEeb2jtbGTSGh2lzRC5ji1l5SRIBJY08.webp'
    'sliding-touch-lock-line.webp' = 'https://www.haport.in/storage/products/nqqSS0diZqQBthSElVsB2ro8OblLM4LYqoW5P8X5.webp'
    'sliding-pop-up-zinc.webp' = 'https://www.haport.in/storage/products/oSDJtuw6i97EV8UEqM8bm9rM8qlJETdCvC5MuVM9.webp'
    'sliding-pop-up-key.webp' = 'https://www.haport.in/storage/products/1eZ4UmsTLxJeIytrAOd9EgB4Czts1ScGzndaViim.webp'
    'sliding-shortneck-key.webp' = 'https://www.haport.in/storage/products/qtZvkLwETrtSCsBjcjYpPoemiIDFEOqk3sXvpItO.webp'
    'sliding-handle-key.webp' = 'https://www.haport.in/storage/products/Psi4ecFxlqTJCELwLhIOZQFzTzhiGbjVuEnwlnCq.webp'
    'sliding-handle.jpg' = 'https://www.haport.in/storage/products/jshMR70xVJ9aKzSskAK57F65JPLgXWWZ9UIusoSf.jpg'
    'sliding-shortneck.webp' = 'https://www.haport.in/storage/products/FU7Lku6EsRt8eHnxnmQUrUaCPCvRN8K6tQ2ouXdK.webp'
    'sliding-double-key-knob.webp' = 'https://www.haport.in/storage/products/ae3DaZM0Cuw07cdMPBCjtYlHhix19fGYTIbmZkSf.webp'
    'sliding-double-key-plain.webp' = 'https://www.haport.in/storage/products/PUgdtAJB0tPlZbzgSVFipYR8AmPFoKNgAEpENctP.webp'
}

$destination = Join-Path $PSScriptRoot '..\images\reference'
New-Item -ItemType Directory -Force -Path $destination | Out-Null
foreach ($image in $images.GetEnumerator()) {
    Invoke-WebRequest -Uri $image.Value -OutFile (Join-Path $destination $image.Key)
}
Write-Output "Downloaded $($images.Count) reference product images to $destination"
