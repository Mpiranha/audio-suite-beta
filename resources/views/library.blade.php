@extends('layouts.app')

@section('content')

<div class="container-fluid">
    <div class="row main-wrap">
        <div class="col-12 col-md-1 no-gutters">
            <navbar active="library"></navbar>
        </div>
        <div class="col-12 col-md-11 no-gutters">
            <audio-header></audio-header>
            <ul class="nav justify-content-center mt-4 mb-4 user-steps">
                <li class="nav-item">
                    <span class="nav-link active">1. CONNECT YOUR MIC > </span>
                </li>
                <li class="nav-item">
                    <span class="nav-link">2. TRANSCRIBE/CUSTOMIZE IN REALTIME > </span>

                </li>
                <li class="nav-item">
                    <span class="nav-link"> 3. PUBLISH/SHARE </span>
                </li>
            </ul>
            <connect-mic></connect-mic>
        </div>



    </div>

</div>
@endsection