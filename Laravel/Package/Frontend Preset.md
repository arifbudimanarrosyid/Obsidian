# Laravel Frontend Preset
![[Frontend Preset.png]]
[Laravel Frontend Preset Github](https://github.com/laravel-frontend-presets)

# Tailwind CSS
![[FP Tailwind.png]]

[Frontend Preset Tailwind Github](https://github.com/laravel-frontend-presets/tailwindcss)

```shell
composer require laravel-frontend-presets/tailwindcss --dev 
```

## Preset without Auth

```shell
php artisan ui tailwindcss
```

## Preset with Auth

```shell
php artisan ui tailwindcss --auth
npm install && npm run dev
php artisan migrate
php artisan serve
```

---

# TALL (Tailwind, Alpine.js,Laravel, Livewire)
![[FP TALL.png]]
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Alpine.js](https://alpinejs.dev/)
-   [Laravel](https://laravel.com/)
-   [[Livewire]]

[Frontend Preset TALL Github](https://github.com/laravel-frontend-presets/tall)

## Preset without Auth

```shell
composer require livewire/livewire laravel-frontend-presets/tall
php artisan ui tall
npm install
npm run dev
```

## Preset withAuth

```shell
composer require livewire/livewire laravel-frontend-presets/tall
php artisan ui tall --auth
npm install
npm run dev
```

## Pagination

```php
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Paginator::defaultView('pagination::default');
        Paginator::defaultSimpleView('pagination::simple-default');
    }
}
```