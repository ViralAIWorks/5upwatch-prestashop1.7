<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit03c4287fc93828915eabffb0a1d67724
{
    public static $classMap = array (
        'Ps_Cashondelivery' => __DIR__ . '/../..' . '/ps_cashondelivery.php',
        'Ps_CashondeliveryValidationModuleFrontController' => __DIR__ . '/../..' . '/controllers/front/validation.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit03c4287fc93828915eabffb0a1d67724::$classMap;

        }, null, ClassLoader::class);
    }
}
