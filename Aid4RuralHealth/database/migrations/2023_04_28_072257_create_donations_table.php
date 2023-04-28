<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->string('donation_mode');
            $table->string('amount');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email')->default('Email Not Set');
            $table->string('country');
            $table->string('state')->default('State Not Set');
            $table->string('city')->default('City Not Set');
            $table->string('postalcode')->default('Postal Code Not Set');
            $table->string('address')->default('Address Not Set');
            $table->string('card_number');
            $table->string('billing_postalcode')->default('Billing Postal Codes Not Set');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};
